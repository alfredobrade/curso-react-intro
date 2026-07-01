import React from "react";

const baseUrl = "http://localhost:3001";

export function useApi() {
    const [items, setItems] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    // GET ALL
    React.useEffect(() => {
        async function load() {
            try {
                const res = await fetch(`${baseUrl}/tasks`);
                const data = await res.json();
                setItems(data);
                setLoading(false);
            } catch (e) {
                console.error(e);
                setError(true);
            }
        }
        load();
    }, []);

    // INSERT
    const addItem = async (text) => {
        try {
            const res = await fetch(`${baseUrl}/tasks/create`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ task: text })
            });

            const newTask = await res.json(); // debe devolver { id, text, completed }
            setItems(prev => [...prev, newTask.task]);
        } catch (e) {
            console.error(e);
            setError(true);
        }
    };

    // UPDATE
    const updateItem = async (id, updates) => {
        try {
            const res = await fetch(`${baseUrl}/tasks/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updates)
            });

            const updated = await res.json();

            setItems(prev =>
                prev.map(t => t.id === id ? updated : t)
            );
        } catch (e) {
            console.error(e);
            setError(true);
        }
    };

    // COMPLETE
    const completeItem = async (id, updates) => {
        try {
            const res = await fetch(`${baseUrl}/tasks/complete/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updates)
            });

            const completed = await res.json();

            setItems(prev =>
                prev.map(t => t._id === id ? completed.task : t)
            );
        } catch (e) {
            console.error(e);
            setError(true);
        }
    };

    // DELETE
    const deleteItem = async (id) => {
        try {
            await fetch(`${baseUrl}/tasks/${id}`, {
                method: "DELETE"
            });

            setItems(prev => prev.filter(t => t.id !== id));
        } catch (e) {
            console.error(e);
            setError(true);
        }
    };

    return {
        items,
        loading,
        error,
        addItem,
        updateItem,
        completeItem,
        deleteItem
    };
}
