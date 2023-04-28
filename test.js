function solveMeFirst(a, b) {
    if (a < 1 || a > 100 || b < 1 || b > 100) {
        throw new Error("Invalid input: a and b must be between 1 and 100");
    }
    return a + b;
}