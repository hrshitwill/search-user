function IsLogg() {
    const isLoggedIn = false; // Change this to false to test the "Please log in" message    
    if (isLoggedIn) {
        return <h1>Welcome back!</h1>;
    }
    else {
        return <h1>Please log in.</h1>;
    }

}
export default IsLogg;