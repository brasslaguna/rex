
export default actionTypes => ({

	update: data => dispatch => {

		dispatch({

			type: actionTypes.update,

			data: [data]

		})

	},

	add: data => dispatch => {

		dispatch({

			type: actionTypes.add,

			data: [data]

		})

	},

	remove: id => dispatch => {

		dispatch({

			type: actionTypes.remove,

			data: id

		})

	}

});