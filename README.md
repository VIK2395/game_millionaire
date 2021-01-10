A player answers on 12 questions. Each question has 4 possible answers, but only one right. On first load, the app gets a config file from the database. The config type is of JSON, and it allows to put inside as many questions as you want, which makes the app scalable. Also the app is written to randomly select questions based on the score and shuffle the possible answers to make the game unpredictable.

Config file’s structure before stringifying:

const gameConfigData = [
	{
    questionScore: 500,
    questions: [
      {
        questionText: "Про людину, яка висловлює слушні думки, кажуть, що вона має...",
        answers: [
            {
                answerId: "sdnj9",
                answerText: "Пейджер",
                isCorrect: false
            },
            {
                answerId: "asad9q3",
                answerText: "Локатор",
                isCorrect: false
            },
            {
                answerId: "diojfj03",
                answerText: "Рацію",
                isCorrect: true
            },
            {
                answerId: "sdew98",
                answerText: "Диктофон",
                isCorrect: false
            }
        ]
      },
      {
        questionText: "Що, за висловом Тараса Шевченка, гуде над вишнями в садку коло хати?",
        answers: [
              {
                  answerId: "fgmmkmfd",
                  answerText: "Джмелі",
                  isCorrect: false
              },
              {
                  answerId: "kookfgk",
                  answerText: "Хрущі",
                  isCorrect: true
              },
              {
                  answerId: "dfnnmm",
                  answerText: "Мухи",
                  isCorrect: false
              },
              {
                  answerId: "mfjgnn",
                  answerText: "Літаки",
                  isCorrect: false
              }
        ]
      }
    ]
	}
];
