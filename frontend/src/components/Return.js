export default function Return() {
    return (
        <div className="return">
            <button onClick={() => window.scrollTo({ top: 0 })}>
                ---[go up]---
            </button>
        </div>
    );
}