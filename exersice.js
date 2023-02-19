//foreach
//for each is used to provide the function to each element in array
const name=["sophie","bobby","venisa"];
name.forEach(name=> console.log(name));

//map
//map fn is used to create a new array for calling every element
const number=[20,30,40];
const newnum=number.map(lessthan);
function lessthan(number)
{
    if(number>10)
    {
        console.log(number);
    }
}
//filter
//filter is used to filter out particular element from a array for a condition.
const country=["Estonia", "Finland", "Sweden", "Denmark", "Norway","IceLand" ];
const result = country.filter(country=> country.startsWith("E"));
console.log(result);


//stringonly
const vehicles=["Bike",2,3,"Car","Van"];
function StringsOnly(vehcicles) {
    const filtered = vehicles.filter((i) => {
        console.log( i.stringsOnly);
    })
    console.log(filteredStrings);
}

//concat
const countries=["Estonia", "Finland"," Sweden", "Denmark"," Norway","IceLand "];
countries.reduce(countries=> console.log(countries+","));
console.log( "are north European countries");

//initial
const countries=["Finland","Fiji","France", "Estonia", "Finland", "Sweden", "Denmark", "Norway"];
const count={};
for(const i of countries)
{
    const initial=i.charAt(0);
    if(initial in count)
    {
        count[initial]++;
        
    }
    else
    {
        count[initial]=1;
    }
    
}
let max=0;
let maxinitial='';
for(const initial in count)
{
    if(count[initial] > max)
    {
        max=count[initial];
        maxinitial=initial;
        
    }
}
console.log("The letter "+maxinitial+" appeared "+max+" times ");


//constant

const values=[2.718, 3.14, 9.81, 98.6, 100];
const [e, pi, gravity, humanBodyTemp,
waterBoilingTemp]=values;
console.log(values)




//exercise
//emptyset

const emptyset = new Set();
console.log(emptyset);
//1to10
const num=new Set();
for(let i=0;i<=10;i++)
{
    
    num.add(i);
    
}
console.log(num);
//setclear
const clearset=new Set([1,2,3,4,5]);
console.log(clearset);
clearset.clear();
console.log(clearset);
//fromarray

const color=["red","blue","voilet","orange","grey","purple","green","yellow"];
const colorset=new Set(color.slice(0,5));
console.log(colorset);

//countrylength
const countries = ["India","Pakisthan","France","Japan","Nepal"];
const Map = new Map();

for (let i = 0; i < countries.length; i++) {
  Map.set(countries[i], countries[i].length);
}

console.log(Map);






//exercise
//emptyset

const emptyset = new Set();
console.log(emptyset);
//1to10
const num=new Set();
for(let i=0;i<=10;i++)
{
    
    num.add(i);
    
}
console.log(num);
//setclear
const clearset=new Set([1,2,3,4,5]);
console.log(clearset);
clearset.clear();
console.log(clearset);
//fromarray

const color=["red","blue","voilet","orange","grey","purple","green","yellow"];
const colorset=new Set(color.slice(0,5));
console.log(colorset);

//countrylength
const countries = ["India","Pakisthan","France","Japan","Nepal"];
const Maper = new Map();

for (let i = 0; i < countries.length; i++) {
  Maper.set(countries[i], countries[i].length);
}

console.log(Maper);
//union 
const a=new Set([1,2,3,4,5]);
const b=new Set([2,4,5,6,8]);
const union=new Set([...a,...b]);
console.log(union);
const inter=new Set();
function intersection(a,b)
{
    const inter=new Set();
    for (const i of b)
    {
        if(a.has(i))
        {
            inter.add(i);
        }
        
    }
    return inter;
}
console.log(intersection(a,b));
//country
const country = ["English","Tamil","Korean","Japanese","French","Malayalam","Telugu","Arab","Chinese","Greek","Latin","German"];
const Mapercont = new Map();

for (let i = 0; i < country.length; i++) {
    numb=prompt("Enter the number of countries speaking "+country[i]);
  Mapercont.set(country[i],numb);
}

console.log(Mapercont);

function highestspoken(n)
{
  const sortedlang = Array.from(unsortedMap.keys()).sort();
  while(n>0)
  for(const i in Mapercont)
  {
      return Mapercont 
      n--;
  }
}
console.log(highestspoken(3));