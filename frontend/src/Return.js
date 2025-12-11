export default function Return() {
    return (
        <div class="return">
            <button onClick={() => window.scrollTo({ top: 0 })}>
                ---[go up]---
            </button>
        </div>
    );
}