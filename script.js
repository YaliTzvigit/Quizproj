

/* DEBUT DU SCRIPT */


 // Test...

    /*  Vous pouvez le tester avec 'console.log("argument" or argument),
     si il s'affiche dans la console, c'est :) */


     // Les questions ...  


     // false : reponse est incorrecte et true : la reponse est correcte

      const questions = [
          {

            question : "Quelle est le monument francais qualifié de << Dame de Fer >>",
            answers : [
                {text : "La cathédrale Sainte-Cécile", correct : false},
               { text : "La sainte-Chapelle", correct : false},
                {text : "L'arc de Triomphe", correct : false},
                {text : "La Tour Eiffel", correct : true},
            ]
          },

          {

             question : " Qui fut le quarantième président des USA ?",
             answers : [

                {text : "Barack Obama", correct : false},
                {text : "Mark Piece", correct : false},
                {text : "RooseVelt", correct : false},
                {text : "Reagan", correct : true},
             ]
          },
          {
            question : "Que signifie 'Bistro' en russe ? ",
            answers : [

                {text : "Bistro", correct : false},
                {text : "Vite", correct : true},
                {text : "Poulet", correct : false},
                {text : "Assiette", correct : false},
            ]
          },
          {

            question : "Complétez ce slogan '... Coca-Cola' ",
            answers : [

                {text : "Strong with", correct : false},
                {text : "Still", correct : false},
                {text : "Always", correct : true},
                {text : "Better with", correct : false},
            ]
          },

          {

            question : "Quelle est le slogan de Roland-Garros ? ",
            answers : [

                {text : "Le sport c'est l'art.", correct : false},
                {text : "L'art de vivre à la française.", correct : true},
                {text : "La victoire appartient aux plus opiniatres.", correct : false},
                {text : "La beauté se trouve dans les yeux de celui qui la comtemple.", correct : false},
            ]
          }
      ];


      // Definir les constantes : 


       const questionElement = document.getElementById("question");
       const repbouttons = document.getElementById("answer-button");
       const Btsuiv = document.getElementById("next-btn");


        let currentQuestionIndex = 0;

        let score = 0; // Intialisé le score à 0

         function startQuiz() {

             currentQuestionIndex = 0;
             score = 0;
             Btsuiv.innerHTML = "Suivant";
             showQuestion();
         }


         function showQuestion() {
            resetState();

                    // 

            let currentQuestion = questions[currentQuestionIndex];
            let questionNo = currentQuestionIndex + 1;
            questionElement.innerHTML = questionNo + '.' + currentQuestion.question;

            currentQuestion.answers.forEach(answer => {
                 const button = document.createElement("button");
                 button.innerHTML = answer.text;
                 button.classList.add("btn");
                 repbouttons.appendChild(button);

                // Si la réponse choisie est correcte : >

                 if (answer.correct){
                     button.dataset.correct = answer.correct;
                 }
                 
                 button.addEventListener("click",selectAnswer);
            });
         }


            // Supprimer les valeurs prédefinies et afficher directement les vraies valeurs...

         function resetState() {

             Btsuiv.style.display = "none";
             while(repbouttons.firstChild) {
                repbouttons.removeChild(repbouttons.firstChild);
             }
         }


          // Donner le resultat du choix de l'utilsateur... 

         function selectAnswer(e) {

             const selectBtn = e.target;
             const isCorrect = selectBtn.dataset.correct === "true";
              if(isCorrect){

                 selectBtn.classList.add("correct");
                 score++;
              } else{

                 selectBtn.classList.add("incorrect");
              }

              // En cas de mauvaise réponse de l'utilisateur : 

               // Le Quiz donnera la bonne reponse, sinon -> question suivante...

              Array.from(repbouttons.children).forEach(button => {

                if (button.dataset.correct === "true") {

                     button.classList.add("correct");
                } button.disabled = true;
              });
              Btsuiv.style.display = "block";
         }


            // Montrer le score : 

         function showScore() {

             resetState();
             questionElement.innerHTML = ` Fin du Jeu. Vous avez ${score} bonnes réponses sur ${questions.length}!`;
             Btsuiv.innerHTML = " Jouer encore";
             Btsuiv.style.display = "block"; // Definir le style d'un élément
         }

        function Manipulerbtsuiv() {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                 showQuestion();
            } else { showScore();}
        }


         Btsuiv.addEventListener("click",()=> {

            if(currentQuestionIndex < questions.length){

                Manipulerbtsuiv();
            }else{
                 startQuiz();
            }
         })

         startQuiz();



    