
import commonSwitch from "./commonSwitch"

export default (targetProperty, actionTypes) => {

	const initialState = {

		[targetProperty]: []

	};

	return (state = initialState, action = {}) =>

		commonSwitch({

			state,

			...actionTypes,

			...action,

			property: targetProperty

		});

}
