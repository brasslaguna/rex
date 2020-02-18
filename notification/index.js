
import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"

import actions from "./actions"
import appendStyles from "../appendStyles"

import styles from "./styles.scss"

@connect(

	(state, props) => ({

		...(

			state[props.reduxReducerProp]

				.notifications.find(

					({ id }) => id == props.id 

				) || {}

		)

	}),

	dispatch => bindActionCreators({ ...actions }, dispatch)

)

export default class Notification extends React.Component {

	constructor() {

		super();

		this.rootRef = React.createRef();

		this.close = this.close.bind(this);

	}

	close() {

		const {
			id,
			remove

		} = this.props;

		remove(id);

	}

	render() {

		const {
			type,
			message,
			title

		} = this.props;

		if(!message)

			return null;

		const appendedStyles = {};

		Object.keys(styles)

			.forEach(name =>

				appendedStyles[name] = appendStyles(styles[name], this.props.styles[name])

			);

		return (

			<div 
				className={appendedStyles.root}

				ref={this.rootRef}
				
				onClick={e => {

					if(e.target.isSameNode(this.rootRef.current))

						this.close();
					
				}}

			>

				<div className={appendedStyles.modal}>

					<div className={appendedStyles.header}>

						<div>

							{title}

						</div>

						<div>

							<svg viewBox="0 0 10 10" className={appendedStyles.close} onClick={this.close}>

								<path d="M1,1 L9,9" />
								<path d="M9,1 L1,9" />

							</svg>

						</div>

					</div>

					{message}

				</div>

			</div>

		);

	}

}