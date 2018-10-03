import TablesManager from "./tablesManager";

describe('service: tableManager; Multi array. Should return length of longest inner array.', () => {
    const tablesManager = new TablesManager();

    test('expanded inner arrays', () => {
        const testedMultiArray: string[][] = [
            ["1", "2", "3"],
            ["1"],
            ["1", "2", "3", "4", "5"],
            ["1", "2", "3"]
        ];
        const simulationResult: number = tablesManager.maxLength(testedMultiArray);

        expect(simulationResult).toBe(5);
    });

    test('almost empty inner array', () => {
        let testedMultiArray: string[][] = [[""]];
        let simulationResult: number = tablesManager.maxLength(testedMultiArray);
        expect(simulationResult).toBe(1);

        testedMultiArray = [[""], [""], [""]];
        simulationResult = tablesManager.maxLength(testedMultiArray);
        expect(simulationResult).toBe(1);
    });

    test('empty inner array', () => {
        const testedMultiArray: string[][] = [];
        const simulationResult: number = tablesManager.maxLength(testedMultiArray);

        expect(simulationResult).toBe(0);
    });
});


describe('.haveSameMaxWidth should return proper value', () => {
    const tablesManager = new TablesManager();

    test('same long inner arrays in both multiArrays', () => {
        const array1: string[][] = [
            ["1", "2", "3", "4", "5"],
            ["1", "2", "3", "4", "5"],
            ["1", "2", "3", "4", "5"]
        ]

        const array2: string[][] = [
            ["1", "2", "3", "4", "5"],
            ["1", "2", "3", "4", "5"],
            ["1", "2", "3", "4", "5"]
        ]
    });
});

describe('.lenghtofInnerArraysIfEqual', () => {
    const tablesManager = new TablesManager();

    test('should return proper length (bigger than 0) ', () => {
        const array: number[][] = [
            [1, 2, 3, 4],
            [4, 4, 4, 4],
        ]
        const simulationResult: number = tablesManager.lengthOfInnerArraysIfEqual(array);
        expect(simulationResult).toBe(4);

    });


    test('should return 0', () => {
        let array: number[][] = [];
        let simulationResult: number = tablesManager.lengthOfInnerArraysIfEqual(array);
        expect(simulationResult).toBe(0);

        array = [[]];
        simulationResult = tablesManager.lengthOfInnerArraysIfEqual(array);
        expect(simulationResult).toBe(0);
    });

    test('should return -1', () => {
        const array: number[][] = [
            [1, 2, 3],
            [4, 4, 4, 4],
        ]
        const simulationResult: number = tablesManager.lengthOfInnerArraysIfEqual(array);
        expect(simulationResult).toBe(-1);

    });
});

describe('.innerArraysHaveSameLength ', () => {
    const tablesManager = new TablesManager();

    test('should return true', () => {
        const array1: number[][] = [
            [1, 2, 3, 4],
            [4, 4, 4, 4],
        ];
        const array2: number[][] = [
            [1, 1, 7, 4],
            [4, 9, 55, 4],
            [4, 2, 55, 4],
            [4, 9, 55, 123],
        ];
        const simulationResult: boolean = tablesManager.innerArraysHaveSameLength(array1, array2);
        expect(simulationResult).toBe(true);
    });

    test('should return false', () => {
        const array1: number[][] = [
            [1, 2, 3, 4],
            [4, 4, 4, 4],
        ];
        const array2: number[][] = [
            [4, 9, 55, 4, 55, 5, 5,],
            [4, 9, 55, 4, 55, 5, 5,],
        ];
        const simulationResult: boolean = tablesManager.innerArraysHaveSameLength(array1, array2);
        expect(simulationResult).toBe(false);
    });
});