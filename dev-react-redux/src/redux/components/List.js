import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return { articals: state.articals };
};

const ConnectedList = ({ articals }) => (
	<ul calssName='list-group list-group-flush'>
		{articals.map( el=>(
			<li calssName='list-group-item' key={el.id} >
				{el.title}
			</li>
		))}
	</ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;