import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './index.css'

const MoneyBookItem = (props) => {
	const {date, item, amount} = props.book
	return(
			<tr>
			<td>{date}</td>
			<td>{item}</td>
			<td>{amount >= 0 ? amount : null }</td>
			<td>{amount < 0 ? -amount : null }</td>
			</tr>
	)
}

MoneyBookItem.propTypes = {
	book: PropTypes.object.isRequired
}


const MoneyBook = () => {
	const books=[
		{date: "1/1", item: "お年玉", amount: 10000},
		{date: "1/3", item: "ケーキ", amount: -500},
		{date: "2/1", item: "小遣い", amount: 2000},
		{date: "2/5", item: "漫画", amount: -5000}
	]
	
	return (
			<div>
			<Title>こづかい帳</Title>
			<table className="book">
			<thead>
			<tr><th>日付</th><th>項目</th><th>入金</th><th>出金</th></tr>
			</thead>
			<tbody>
			{books.map((book)=><MoneyBookItem book={book} key={book.date + book.item} />)}
				
		
			<MoneyBookItem book={books[0]} />
			<MoneyBookItem book={books[1]} />
			<MoneyBookItem book={books[2]} />
			<MoneyBookItem book={books[3]} />			
			</tbody>
			</table>
			</div>
	)
}

const Title = (props) => {
	return (<h1>{props.children}</h1>)
}

Title.propTypes = {
	children: PropTypes.string
}

ReactDOM.render(
		<MoneyBook />,
	document.getElementById('root')
)
