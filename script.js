function TestController($scope) {
    $scope.questions = [
        {
            id : 1,
            text:'¿Cómo está el clima hoy en Cd. Juárez?',
            validAnswer : 2,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : 'Nublado'},
                {id : 2, text : 'Soleado'},
                {id : 3, text : 'Lluvioso'},
                {id : 4, text : '¡No s&eacute;!'}
            ]
        },
        {
            id : 2,
            text:'¿Cuánto es 2+2?',
            validAnswer : 3,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : '3'},
                {id : 2, text : '5'},
                {id : 3, text : '4'}
            ]
        },
        {
            id : 3,
            text:'¿Cual es la frontera con EUA?',
            validAnswer : 2,
            userAnswer : null,
            status : '',
            answers: [
                {id : 1, text : 'Laredo'},
                {id : 2, text : 'El Paso'},
                {id : 3, text : 'Tucson'}
            ]
        }
    ];

    $scope.userStatus = '';

    $scope.validAnswers = 0;

    $scope.validate = function (question) {
        if (question.validAnswer == question.userAnswer) {
            $scope.validAnswers ++;
            question.status = 'ok';
        } else {
            if (question.status == 'ok' && $scope.validAnswers > 0) {
                $scope.validAnswers --;
            }
            question.status = 'error';
        }

        updateUserStatus();
    };
}