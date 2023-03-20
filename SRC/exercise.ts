type exerciseType = {
  exID: number;
  exTitle: string;
  exCategory: string[];
  exDuration: number;
  exRest: number;
  exMotive: string;
  exSteps: string[];
  exImages: string[];
};

export const exercises: exerciseType[] = [
  {
    exID: 1,
    exTitle: 'shoulder stretch',
    exCategory: ['fullBodyStretch', 'upperbody'],
    exDuration: 30000,
    exRest: 10000,
    exMotive: 'gentle stress relieveing shoulder stretch',
    exSteps: [
      'place one arm across your body, parallel to the ground, then use the other arm to pull the parallel arm toward your chest',
      'hold for a while, switch the arms and repeat the exercise',
      'keep the inside arm straight during the exercise',
    ],
    exImages: [],
  },
  {
    exID: 2,
    exTitle: 'Standing side bend',
    exCategory: ['fullBodyStretch'],
    exDuration: 20000,
    exRest: 10000,
    exMotive: 'gentle stretch on the muscles of your side',
    exSteps: [
      'stand with your feet shoulder width apart',
      'put your right hand at your side. Bend your body to your right side and lower your right hand towards the floor',
      'pause for one second and return to the starting possition.',
      'switch sides and repeat the exercise',
    ],
    exImages: [],
  },
  {
    exID: 3,
    exTitle: 'chest stretch',
    exCategory: ['fullBodyStretch'],
    exDuration: 20000,
    exRest: 10000,
    exMotive: 'chest muscles relaxing stretch',
    exSteps: [
      'Find a doorway, take a lunge position in the doorway with your arms on the doorframe and your elbows a little lower than your shoulders, then slowly bring your chest forward',
      'Hold this position for 30 - 40 seconds. Then slowly come out of it, bring your arms down and do a couple of shoulder rolls',
      "don't pull your head forward, and keep your neck relaxed",
    ],
    exImages: [],
  },
  {
    exID: 4,
    exTitle: 'triceps stretch left',
    exCategory: ['fullBodyStretch'],
    exDuration: 20000,
    exRest: 10000,
    exMotive: 'Relaxes your left arm triceps',
    exSteps: [
      'Put your left hand on your back, use your right hand to grab your left elbow and gently pull it. Hold this position for a few seconds',
    ],
    exImages: [],
  },
  {
    exID: 5,
    exTitle: 'triceps stretch right',
    exCategory: ['fullBodyStretch'],
    exDuration: 20000,
    exRest: 10000,
    exMotive: 'relaxes right arm triceps',
    exSteps: [
      'put your rignt hand on your backm use your left hand to grab your left elbow and gently pull it. Hold this position for a few seconds',
    ],
    exImages: [],
  },
  {
    exID: 6,
    exTitle: 'spine lumbar twist stretch left',
    exCategory: ['fullBodyStretch'],
    exDuration: 15000,
    exRest: 10000,
    exMotive: 'relieves stress on your spine',
    exSteps: [
      'Lie on your back with your legs extended',
      'lift your left leg up and use your right hand to pull your left knee to the right, but keep your other arm extended to the side on the floor',
      'hold this position a few seconds',
    ],
    exImages: [],
  },
  {
    exID: 7,
    exTitle: 'spine lumbar twist stretch right',
    exCategory: ['fullBodyStretch'],
    exDuration: 15000,
    exRest: 10000,
    exMotive: 'relieves stress on your spine',
    exSteps: [
      'Lie on your back with your legs extended',
      'lift your right leg up and use your left hand to pull your right knee to the left, but keep your other arm extended to the side on the floor',
      'hold this position a few seconds',
    ],
    exImages: [],
  },
  {
    exID: 8,
    exTitle: 'kneeling lunge stretch left',
    exCategory: ['fullBodyStretch'],
    exDuration: 20000,
    exRest: 10000,
    exMotive: 'excellent stretch of leg muscle',
    exSteps: [
      'start in a push-up position. bring your left knee forward and drop your right knee on the floor.',
      'raise your upper body and put your hands on the waist. then push your hips forward while keeping your upper body straight',
      "please make sure your front knee won't go over your toes. Hold this position for a few seconds",
    ],
    exImages: [],
  },
  {
    exID: 9,
    exTitle: 'kneeling lunge stretch right',
    exCategory: ['fullBodyStretch'],
    exDuration: 20000,
    exRest: 10000,
    exMotive: 'excellent stretch of leg muscle',
    exSteps: [
      'start in a push-up position. bring your right knee forward and drop your left knee on the floor.',
      'raise your upper body and put your hands on the waist. then push your hips forward while keeping your upper body straight',
      "please make sure your front knee won't go over your toes. Hold this position for a few seconds",
    ],
    exImages: [],
  },
  {
    exID: 10,
    exTitle: 'calf stretch left',
    exCategory: ['fullBodyStretch'],
    exDuration: 20000,
    exRest: 10000,
    exMotive: 'relaxes your heels',
    exSteps: [
      'stand one big step away in front of a wall. step forward with your right foot and push the wall with your hands',
      'please make sure your left leg is fully extended and you can feel your left calf stretching. Hold this position for a few seconds',
    ],
    exImages: [],
  },
  {
    exID: 11,
    exTitle: 'calf stretch right',
    exCategory: ['fullBodyStretch'],
    exDuration: 20000,
    exRest: 10000,
    exMotive: 'relaxes your heels',
    exSteps: [
      'stand one big step away in front of a wall. step forward with your left foot and push the wall with your hands',
      'please make sure your right leg is fully extended and you can feel your right calf stretching. Hold this position for a few seconds',
    ],
    exImages: [],
  },
  {
    exID: 12,
    exTitle: 'cobra stretch',
    exCategory: ['fullBodyStretch'],
    exDuration: 20000,
    exRest: 10000,
    exMotive: 'relaxes your abdomen',
    exSteps: [
      'lie down on your stomach and bend your elbows with your hands beneath your shoulders',
      'then push your chest up off the ground as far as possible. Hold this position for some seconds',
    ],
    exImages: [],
  },
  {
    exID: 13,
    exTitle: "child's pose",
    exCategory: ['fullBodyStretch'],
    exDuration: 20000,
    exRest: 10000,
    exMotive: 'relieves stress on your upper body',
    exSteps: [
      'start with your knees and hands on the floor. put your hands a little forward, widen your knees and put your toes together',
      'take a breath, then exhale and sit back. Try to make your butt touch your heels. Relax your elbows, make your forehead touch the floor and try to to lower your chest close to the floor. hold this position',
      'keep your arms stretched forward as you sit back. Make sure there is enough space between your shoulders and ears during the exercise',
    ],
    exImages: [],
  },
];
