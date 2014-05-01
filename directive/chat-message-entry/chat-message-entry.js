angular.module('polls').directive('chatMessageEntry', function(chatService) {
	return {
		restrict: 'E',
		replace: true,
		scope: {

		},
		templateUrl: 'directive/chat-message-entry/chat-message-entry.html',
		link: function(scope, element, attrs, fn) {
            scope.sendMessage = function(){
                chatService.sendMessage(scope.name, scope.message);
                scope.message = "";
            };
        }
    };
});
