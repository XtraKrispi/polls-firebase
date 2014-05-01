angular.module('polls').directive('chatList', function(chatService) {
	return {
		restrict: 'E',
		replace: true,
		scope: {

		},
		templateUrl: 'directive/chat-list/chat-list.html',
		link: function(scope, element, attrs, fn) {
            scope.messages = chatService.getChats();
            scope.$on('chats', function(s, c){
                scope.messages = c;
            }); 
        }
    };
});
