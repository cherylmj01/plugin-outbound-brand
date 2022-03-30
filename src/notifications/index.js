import * as Flex from '@twilio/flex-ui';


export default (flex, manager) => {
	registerCustomNotifications(flex, manager);
}

export const CustomNotifications = {
	BrandNotification: "BrandNotSelected"
}

function registerCustomNotifications(flex, manager) {
	flex.Notifications.registerNotification({
		id: CustomNotifications.BrandNotification,
		type: Flex.NotificationType.error,
		content: "Brand is not selected. Please select a brand to make a call."
	});
}