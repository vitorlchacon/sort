function sleep(ms: number): any {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const SORT_METHODS = {
    async insertion(inputArr: number[]): Promise<number[]> {
        const n = inputArr.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            const current = inputArr[i];
            // The last element of our sorted subarray
            let j = i - 1;
            while ((j > -1) && (current < inputArr[j])) {
                inputArr[j + 1] = inputArr[j];
                j--;
            }

            sleep(1000).then(() => {
                inputArr[j + 1] = current;
            });
        }
        return inputArr;
    }
};
