//function lay cac mang co tong cac gia tri bang gia tri x
function laymang(x) {
    const Arr = []
    let dataArr = []

    for (let index = 0; index < x; index++) {
        Arr.push(1)
    }

    for (let index = x - 1; index > 0; index--) {
        let sum = 0;
        Arr.map(function (element) {
            sum += element;
        });
        if (sum == x - 1) {
            Arr.splice(index - 2, 1)
            Arr.push(2)
        }
        if (sum == x) {
            let B = [...Arr]
            dataArr.push(B)
            Arr.splice(index - 2, 2)
            Arr.push(2)
        }
    }
    return dataArr
}

//function sap xep cac mang tu vi tri 1
function thuattoan(Arr) {
    const dataArr = [];
    for (let index = 1; index < Arr.length; index++) {
        let a = Arr[index]
        let dem = Arr.length - index
        if (index < dem) {
            for (let index = a.length; index > 1; index--) {
                a.splice(index - 2, 1);
                a.push(1);
                let B = [...a]
                dataArr.push(B)
            }
        }
        if (index >= dem) {                        
            for (let i = 0; i < (a.length - 1); i++) {
                const mt =  a.splice(i, 1);            
                a = [...a,...mt]                
                let B = [...a]   
                dataArr.push(B)
            }           
        }
    }
    return dataArr
}

//truyen parameter x vao function 
const Arr = laymang(5);

//Chuyen mang sang string de luu
const saveArr = JSON.stringify(Arr)

//truyen parameter la array vua lay duoc 
const Arr2 = thuattoan(Arr);
const saveArr2 = JSON.stringify(Arr2)
const result = saveArr + " " + saveArr2
console.log("ket qua la: " + result);