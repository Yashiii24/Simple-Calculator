function f(v) {
    if (v == 'c') {
        document.getElementById('box').value = "";
        return;
    }
    box = document.getElementById('box').value;
    if (box == 0 && v == 0)
        return;
    if (v == '+' || v == '-' || v == '*' || v == '/') {
        opr = v;
        num = parseFloat(box);
        document.getElementById('box').value = v;
        return;
    }
    if (v == '=') {
        num1 = parseFloat(box);
        switch (opr) {
            case '+':
                ans = num + num1;
                break;
            case '-':
                ans = num - num1;
                break;
            case '*':
                ans = num * num1;
                break;
            case '/':
                ans = parseInt(num / num1);
                break;
        }
        document.getElementById('box').value = ans;
        return;
    }
    if (!isNaN(document.getElementById('box').value)) {
        document.getElementById('box').value += v;
    } else
        document.getElementById('box').value = v;
}