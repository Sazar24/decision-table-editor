interface ITablesManager {
    haveSameMaxWidth(array1: string[][], array2: string[][]): boolean; // Deprecated. function propably wont be neccessary anymore. 
    // expandInnerArraysBy1(array1: string[][], array2: string[][]): void;
    innerArraysHaveSameLength(arr1: any[][], arr2: any[][], ): boolean;
    // expandShorterArrayToEqualizeLongerArray(arr1,arr2) | EqualizeArraysSizes(arr1,arr2) // TODO: do przemyślenia, taki bezpiecznik.
}

export default class TablesManager implements ITablesManager {
    maxLength(array: string[][]): number {
        let foundedMax: number = 0;
        array.map((innerArray: string[]) => {
            if (innerArray.length > foundedMax) foundedMax = innerArray.length;
        })
        return foundedMax;
    };

    public haveSameMaxWidth(array1: string[][], array2: string[][]): boolean {
        const array1MaxLength: number = this.maxLength(array1);
        const array2MaxLength: number = this.maxLength(array2);
        if (array1MaxLength === array1MaxLength)
            return true;
        else return false;
    }

    public lengthOfInnerArraysIfEqual(arr: any[][]): number {
        if (arr[0] === undefined) return 0;
        if (arr === [] ) return 0;
        if (arr[0] === []) return 0;

        let foundedLength: number = arr[0].length;

        arr.map((innerArray: any[]) => {
            if (foundedLength !== innerArray.length) {
                foundedLength = -1;
            };
        });
        return foundedLength;
    }

    public innerArraysHaveSameLength(arr1: any[][], arr2: any[][], ): boolean {
        const arr1InnerLength: number = this.lengthOfInnerArraysIfEqual(arr1);
        const arr2InnerLength: number = this.lengthOfInnerArraysIfEqual(arr2);

        if (arr1InnerLength === -1 || arr2InnerLength === -1) return false;
        if (arr1InnerLength !== arr2InnerLength) return false;

        return true;
    }

    public EqualizeArraysSizes(arr1:any[][],arr2:any[][]):void{

    }
};