import ErrorMessage from "../components/ui/ErrorMessage";
//פונקציה שזוג 8 צריך להשתמש בה
async function catchErrors(err) {
    return <ErrorMessage message={err.message} code={err.code} />;
}