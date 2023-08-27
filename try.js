console.log('person1 : Shows Ticket');
console.log('person2 : Shows Ticket');

const preMovie= async ()=>{
    const wifeBringingTicket=new Promise((resolve,reject)=> {
    setTimeout(()=>
        resolve('Ticket')
    ,3000);}
);
const getPopcorn=new Promise((resolve,reject)=>resolve(`Popcorn`))
const addButter=new Promise((resolve,reject)=>resolve(`butter`))
const getColdrink=new Promise((resolve,reject)=>resolve('coldrink'))
let ticket=await wifeBringingTicket ;
console.log(`wife : i thave the ${ ticket}`);
console.log('husband : we should get in');
console.log(' wife : no i am hungary');
let popcorn=await getPopcorn;
console.log('husband : i got some popcorn');
console.log('husband : we should get in');
console.log(' wife : i need butter on my popcorn');
let butter= await addButter;
console.log('husband : i got some butter on popcorn');
console.log('husband : any thing else darling');
console.log('wife: now i want coldrink')
console.log("Husband : ok sure Darling");
let cold=await getColdrink;
console.log('husband : i got some coldrink');
console.log('husband : any thing else darling');
console.log(' wife : lets go we are getting late');
console.log('husband : thanks fr reminder');


return ticket;




};
preMovie().then((m)=> console.log(m)
    

);
console.log('person4 : Shows Ticket');
console.log('person5 : Shows Ticket');