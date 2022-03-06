import React, {useEffect, useState} from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

export function FrontPage() {
    return <div>
        <h1>Welcome to Quiz</h1>
            <ul>
                <li><Link to={"/questions"}>Take quiz</Link></li>
                <li><Link to={"/questions/answer"}>All questions with answers</Link></li>
            </ul>
    </div>;
}

function useLoading(loadingFunction) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [data, setData] = useState();

    async function load() {
        try {
            setLoading(true);
            setData(await loadingFunction());
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        load();
    }, []);

    return { loading, error, data };
}

async function fetchJSON(url) {
    const res = await fetch(url);
    if (!res.ok){
        throw new Error(`Failed to load ${res.status}: ${res.statusText}`);
    }
    return await res.json();
}

export function ListQuestions() {
    const {loading, error, data} = useLoading(
        async () => fetchJSON("/api/questions")
    );

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>
            <h1>Error</h1>
            <div>{error.toString()}</div>
        </div>
    }

    return <div>
        <h1>All questions with correct answers</h1>
        <ul>
            {data.map((question) => (
                <li key={question.id}>{question.question}</li>
            ))}
        </ul>
    </div>;
}

export function Quiz() {

    return <div>
        <h1>{question.question}</h1>
        {Object.keys(question.options)
            .filter(option => question.options[option])
            .map(option => <p key={option}>
                <button onClick={() => setAnswer(option)}>{question.options[option]}</button>
            </p> )
        }
    </div>;
}

export function Application() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<FrontPage />}/>
                <Route path={"/questions"} element={<Quiz/>}/>
                <Route path={"/questions/answer"} element={<ListQuestions/>}/>
                <Route path={"/*"} element={<h1>Not found</h1>}/>
            </Routes>
        </BrowserRouter>
    );
}