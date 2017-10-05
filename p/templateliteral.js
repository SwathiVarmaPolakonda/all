function sides(literals, ...expressions) {
    var A = expressions[0];
    var P = expressions[1];
    var s1 = (P+Math.sqrt(Math.pow(P, 2)-(16*A)))/4;
    var s2 = (P-Math.sqrt(Math.pow(P, 2)-(16*A)))/4;
    return [s1, s2].sort();
}
sides(10, 14);
