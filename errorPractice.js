// // const { valid } = require('@hapi/joi');
// // const express = require('express');

const { func } = require("joi");
const { sendUserResetPasswordEmail } = require("./controller/userController");

// const { restart } = require("nodemon")

// // try{
// // nikhil()
// // throw {
// //     number: 101,
// //     message: 'not valid'
// // }

// // } catch (ex){

// // console.log(ex.number +'-' + ex.message);
// // } finally{
// //     console.log('this is final');
// // }
// const add = (val1,val2)=>{
//     const sum = val1 + val2
//     return sum
// }
// const res = add(30,20)
// console.log(res);

// let text = "";

// for (let i = 0; i < 5; i++) {
//   text +=  i 
// }
// console.log(show())
// const show=()=>{


//     10+20

// }

// let text =[13,10,7,4,1];
// let i =0;
// for(i=0;i<=text;length,i++){
//     text+=i;
//     console.log(text);
// }

// let letters =['a','b','c','d','e'];
// for (){

// }


// function my(){

//     var x = 5;
//     var x=4;
//     {
//         console.log(x)
//     }
// }
// console.log(x)

// const object = { x: 1, y: 2, z: 3 };

// for (const value in object) {
//     console.log(`${value} = ${object[value]}`);

// }
// var id = { "name": "nikhil","age": 25, "place": "indore" };

// for (const value in id) {
//     console.log(`${value} = ${id[value]}`);

// }
// console.log(id.age)

// const arr1 = ['ram','sham','sita','gita'];
// console.log(arr1)
//  for(i=0;i<arr1.legth;i++){
//     console.log(arr1[i]);
//     console.log(arr1[2]);
//  }

//  const arr1 = ['ram','sham','sita','gita',2,3,4,5,6];


// let arr= arr1.splice(2,0,'hii','hr','ty');
// console.log(arr1);

// console.log(typeofarr1)


// var buffer = Buffer.alloc(10);
// console.log(buffer)
// buffer.read("hello nikhil")
// console.log(buffer)


// var buffer = Buffer.from('nikhil')
// console.log(buffer)

// var http = require('http')
// var fs = require('fs')

// http.createServer(function (req, resp) {
//     var content = ''
//     var reader = fs.createReadStream('buffer.txt')
//     reader.setEncoding('utf-8')
//     reader.on('error', function (err) {
//         console.log(err);
//     }).on('data', function (chunk) {
//         content += chunk
//     }).on('end', function () {
//         resp.on('erro', function (err) {
//             console.log(err);
//         })

//         resp.setHeader('200', { 'content-type': 'plain/text' })
//         resp.write(content)
//         resp.end()
//     })
// }).listen(5000)

//--------------------==OOPs==------------------------------------


// class User {
//     #password;
//     constructor(name, userName, password) {
//         this.name = name;
//         this.userName = userName;
//         this.password = password;
//     }

//     login(userName, password) {
//         if (userName === this.userName && password === this.#password) {
//             console.log('login Successfully');
//         } else {
//             console.log('Authentication Failed!!');
//         }
//     }

//     setPassword(newPassword) {
//         this.#password = newPassword;
//     }
// };

// const obj1 = new User('nikhil', 'nikhil','abc@123');
// const obj2 = new User('patil', 'patil','abc@123');

// obj1.login('nikhil', 'abc@123')
// obj2.login('patil', 'abc@123')

// console.log(obj1.name);
// console.log(obj1.password);

// obj1.setPassword('new_password');
// obj1.login('nikhil', 'abc@123');
// obj1.login('nikhil', 'new_password');

// const data = [
//     {
//         name: 'ayush',
//         email: "aayush@gmail.com"
//     },
//     {
//         name: "rahul",
//         email: "rahul@gmail.com"
//     }
// ]

// function getData() {
//     setTimeout(() => {
//         data.forEach((data, index) => {
//             console.log('Data', data);

//         })
//     }, 3000)
// }
// function createData(newData) {
//     setTimeout(() => {
//         data.push(newData)
//     }, 1000)
// }

// getData()
// createData({name :'rishabh',email:'rishabh@gmail.com'})



// const data = [
//     {
//         name: 'ayush',
//         email: "aayush@gmail.com"
//     },
//     {
//         name: "rahul",
//         email: "rahul@gmail.com"
//     }
// ]

// function getData() {
//     setTimeout(() => {
//         data.forEach((data, index) => {
//             console.log('Data', data);

//         })
//     }, 1000)
// }
// function createData(newData,callback) {
//     setTimeout(() => {
//         data.push(newData)
//         callback()
//     }, 1000)
// }

// callback()
// createData({name :'rishabh',email:'rishabh@gmail.com'})

// function sendEmail1() {
//     console.log('1')
// }


// function sendEmail2() {
//     console.log('2')
// }


// function sendEmail3() {
//     console.log('3')
// }


// function sendEmail4() {
//     console.log('4')
// }


// function sendEmail5() {
//     console.log('5')
// }

// sendEmail1()
// sendEmail2()
// sendEmail3()
// sendEmail4()
// sendEmail5()


// function register(callback) {
//     setTimeout(() => {
//         console.log('register success')
//         callback()
//     }, 2000)
    
// }

// function sendEmail(callback) {
//     setTimeout(() => {
//         console.log('send email success')
//         callback()
//     }, 1000)
 
// }

// function login(callback) {
//     setTimeout(() => {
//         console.log('login success')
//         callback()
//     }, 1000)
    
// }

// function getUserData(callback) {
//     setTimeout(() => {
//         console.log('getUser data  success')
//         callback()
//     }, 1000)
   
// }

// function displayUserData(callback) {
//     setTimeout(() => {
//         console.log('register success')
//         callback()
//     }, 1000)
// }

// // function register() {
// //     function sendEmail() {
// //         function login() {
// //             function getUserData() {
// //                 function displayUserData() {
// //                 }
// //             }
// //         }
// //     }
// // }

// register (function(){
//     sendEmail (function(){
//         login (function(){
//             getUserData (function(){
//                 displayUserData (function(){
    
//                 })
                
//             })
            
//         })
        
//     })
    
// })

// console.log('THE END')
