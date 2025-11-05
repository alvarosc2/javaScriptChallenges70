function numberRange(start: number, end: number): number[] {
    if (start === end) {
        return [start];
    }

    let answer: number[] = numberRange(start, end - 1);
    answer.push(end);

    return answer;
}

export { numberRange };