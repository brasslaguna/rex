
export default (actions, api, dispatch, onError) =>

	Object.keys(actions).forEach(

		serviceName => {

			const serviceActions = actions[serviceName];

			Object.keys(serviceActions).forEach(

				actionName => {

					if(["created", "updated", "patched", "removed"].indexOf(actionName) > -1)

						api.service(serviceName).on(actionName, data => serviceActions[actionName](dispatch)(data));

				}

			);

			api.service(serviceName)

				.hooks({

					error: onError

				});

		}

	);