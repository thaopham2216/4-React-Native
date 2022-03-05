const bond = {
    limbs: 5,
    height: "6' 0\"",
    first_name: 'James',
    last_name: "Bond",
    favorites: {
        food: 'Steak',
        number: 17,
        music: 'Rock',
        sport: 'Croquet'
    },
    accomplishments: [
		{
			title: 'Birth'
		}, {
			title: 'Graduated'
		}
	]
}

// LET's PASS this into a Component (or function)

// Declaration
function DisplayAgent(someAgent){
	return (
		<div>
			<h1>Bond, James Bond</h1>
			<h2>And give the height and such here</h2>
			<div>
				<p>Steak</p>
				<p>Croquet</p>
			</div>
			<ul>
				<li>Birth</li>
				<li>Graduated</li>
			</ul>
			{/*Other properties displayed below */}
		</div>
	)
}

// Invocation
<DisplayAgent 
	someObject={bond} 
	anotherObject={someOtherObject}
	aNumber={5}
	aString="A string"
/>

// NOW, WE NEED TO USE THE PROPERTIES IN THE COMPONENT
// WE COULD INVOKE THE OBJECT AND SPECIFY THE PROPERTIES: 

function DisplayAgent(props){
	return (
		<div>
			<h1>{props.someObject.last_name}, {props.someObject.first_name} {props.someObject.last_name} </h1>
			<h2>{props.someObject.height}, {props.someObject.limbs}</h2>
			<div>
				<p>{props.someObject.favorites.food}</p>
				<p>{props.someObject.favorites.sport}</p>
			</div>
			{props.someObject.accomplishments.map(acc => <p>{acc.title}</p>)}
			{/*Other properties displayed below */}
		</div>
	)
}

// BUT THAT IS A LITTLE REPETITIVE
// HOW ABOUT WE USE THE NAME OF EACH PROPERTY? 
// WE MAKE A VARIABLE FOR EACH ONE


function DisplayAgent(props){
	const limbs = props.someObject.limbs
	const first_name = props.someObject.first_name
	const last_name = props.someObject.last_name
	const height = props.someObject.height
	const food = props.someObject.favorites.food
	const sport = props.someObject.favorite.sport
	
	return (
		<div>
			<h1>{last_name}, {first_name} {last_name} </h1>
			<h2>{height}, {limbs}</h2>
			<div>
				<p>{food}</p>
				<p>{sport}</p>
			</div>
			{/* THIS IS STILL THE FASTEST WAY FOR ACCOMPLISHMENTS */}
			{props.someObject.accomplishments.map(acc => <p>{acc.title}</p>)}
			{/*Other properties displayed below */}
		</div>
	)
}

// OKAY, BUT DO WE HAVE TO SAY "PROPS" SO MANY TIMES?!?!!
// tHAT BRINGS US TO DESTRUCTURING
// WE KNOW, IN REACT, THAT PROPS IS PRESENT IN ALL COMPONENTS -- 
// EVEN IF NONE ARE ASSIGNED!!
// SO HOW ABOUT WE ONLY EXTRACT THE PROPERTY THAT WE USE?


function DisplayAgent({someObject}){
	const limbs = someObject.limbs
	const first_name = someObject.first_name
	const last_name = someObject.last_name
	const height = someObject.height
	const food = someObject.favorites.food
	const sport = someObject.favorite.sport
	
	return (
		<div>
			<h1>{first_name} {last_name}</h1>
			<h2>{height}, {limbs}</h2>
			<div>
				<p>{food}</p>
				<p>{sport}</p>
			</div>
			{/* THIS IS STILL THE FASTEST WAY FOR ACCOMPLISHMENTS */}
			{someObject.accomplishments.map(acc => <p>{acc.title}</p>)}
			{/*Other properties displayed below */}
		</div>
	)
}


// BETTER, BUT THAT IS STILL 6 VARIABLES AND SIX LINES
// AND WE HAVE someObject ON EACH ONE!
// SINCE WE KNOW AN OBJECT HAS MULTIPLE PROPERTIES.....
// AND WE ARE MAKING SEVERAL OF THEM INTO VARIABLES.....
// LET'S TAKE WHAT WE NEED IN ONE STROKE!!!

function DisplayAgent({someObject}){
	const  { limbs, first_name, last_name, height } = someObject
	const { food, sport } = someObject.favorites


	
	// AND IF YOU'RE FEELING SPICY:
	const { accomplishments } = someObject
	
	return (
		<div>
			<h1>{first_name} {last_name}</h1>
			<h2>{height}, {limbs}</h2>
			<div>
				<p>{food}</p>
				<p>{sport}</p>
			</div>
			{accomplishments.map(acc => <p>{acc.title}</p>)}
			{/*Other properties displayed below */}
		</div>
	)
}