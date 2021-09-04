//khởi tạo promise
const promisePending = new Promise((resolve, reject) => {

});

console.log("trang thia ban dau", promisePending)

// khi call resolve() => trang thai la fulifed
const promiseFulfilled = new Promise((resolve, reject) => {
    resolve();
})
console.log("tran g thia khi call resolve", promiseFulfilled)

//khi call reject() => trạng thái là reject

const promiseReject = new Promise((resolve, reject) => {
    reject();
})
console.log("trang thái khi call reject", promiseReject)

const promiseReject2 = new Promise((resolve, reject) => {
    reject('dã xảy ra lỗi connect đên db');
})
console.log("trang thái khi call reject có lỗi", promiseReject2)

const promiseFulfilled2 = new Promise((resolve, reject) => {
    resolve(123);
})
console.log(promiseFulfilled2)

//using promise with method
const promiseMethod = new Promise((resolve, reject) => {
    resolve();
})
promiseMethod
    .then(() => {
        console.log('trạng thái thành công đc gọi')
    })
    .catch(() => {
        console.log('trạng thái error đc gọi')
    })
    .finally(() => {
        console.log('trạng thái thành công + thất bại')
    })
//using promise with method with value
const promiseMethodwithValue = new Promise((resolve, reject) => {
    const arrayCourse = [
        {
            'CourseName': "js",
            'Price': '333333',
            'Author': "hai"
        },
        {
            'CourseName': "node",
            'Price': '333',
            'Author': "hai1"
        }
    ]
    resolve(arrayCourse)
});
promiseMethodwithValue
    .then((valueCourse) => {
        console.log('promiseMethodwithValue', valueCourse)
    })
    .catch((error) => {
        console.log('error')
    })
    .finally(()=> {
        console.log('finish')
    })

//hỏi
//Muốn lấy dữ liệu trả về từ API mà sử dụng Promise ta làm các bước
//b1: tạo promise để call api
//b2: tạo resolve, reject
//b3: định nghĩa các hàm then, cath, finally