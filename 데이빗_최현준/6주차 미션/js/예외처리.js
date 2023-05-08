// 사용자로부터 입력받은 수를 0으로 나누는 코드를 작성하세요. 이때, 0으로 나누려는 경우 "Cannot divide by zero"라는 메시지를 출력하고, 그 외의 경우에는 나눈 값을 출력하세요.
class infinityException extends Error {
    constructor(message) {
        super(message);
    }
}

let number = prompt("수를 입력하세요");

const logic = (number) => {
    if (number / 0 == Infinity) {
        throw new infinityException("Cannot divide by zero");
    }
    return number / 0;
}

try {
    console.log(logic(number));
} catch (error) {
    if (error instanceof infinityException) {
        console.log(error.message);
    }
}
