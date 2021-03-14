

const routines = [
    {
        id: 0,
        title: 'First Leg Workout',
        date: '2021-03-01',
        workouts: [
            {
                "id": 0,
                "name": "Leg Press",
                "weight": "80 lbs",
                "reps": "10",
                "sets": "3",
                "notes": "Go up in weight next time"
              },
              {
                "id": 1,
                "name": "Leg Curl",
                "weight": "35 lbs",
                "reps": "10",
                "sets": "3",
                "notes": ""
              },
              {
                "id": 2,
                "name": "Kettlebell Squats",
                "weight": "12 lbs",
                "reps": "12",
                "sets": "3",
                "notes": "Good weight"
              },
              {
                "id": 3,
                "name": "Deadlift",
                "weight": "40 lbs",
                "reps": "10",
                "sets": "3",
                "notes": "Heavy"
              },
              {
                "id": 4,
                "name": "Kickbacks",
                "weight": "25 lbs",
                "reps": "12",
                "sets": "3",
                "notes": "3 sets each leg"
              },
              {
                "id": 5,
                "name": "Back extension",
                "weight": "75 lbs",
                "reps": "10",
                "sets": "3",
                "notes": "Great"
              }
        ]
    },
    {
        id: 1,
        title: 'First Chest Workout',
        date: '2021-03-05',
        workouts: [
            {
                "id": 0,
                "name": "Chest Press",
                "weight": "25 lbs",
                "reps": "10",
                "sets": "3",
                "notes": "Good weight"
              },
              {
                "id": 1,
                "name": "Chest Fly",
                "weight": "30 lbs",
                "reps": "10",
                "sets": "3",
                "notes": "Little heavy"
              },
              {
                "id": 2,
                "name": "Bench Press",
                "weight": "50 lbs",
                "reps": "12",
                "sets": "3",
                "notes": "Little heavy"
              },
              {
                "id": 3,
                "name": "Overhead Press",
                "weight": "10 lbs",
                "reps": "10",
                "sets": "3",
                "notes": "Good"
              },
              {
                "id": 4,
                "name": "Bicep Curl",
                "weight": "10 lbs",
                "reps": "15",
                "sets": "3",
                "notes": "3 sets each arm"
              }
        ]
    },
    {
      id: 2,
      title: 'Second Chest Workout',
      date: '2021-03-09',
      workouts: [
          {
              "id": 0,
              "name": "Chest Press",
              "weight": "25 lbs",
              "reps": "10",
              "sets": "3",
              "notes": "Good weight"
            },
            {
              "id": 1,
              "name": "Chest Fly",
              "weight": "30 lbs",
              "reps": "10",
              "sets": "3",
              "notes": "Little heavy"
            },
            {
              "id": 2,
              "name": "Bench Press",
              "weight": "50 lbs",
              "reps": "12",
              "sets": "3",
              "notes": "Little heavy"
            },
            {
              "id": 3,
              "name": "Overhead Press",
              "weight": "10 lbs",
              "reps": "10",
              "sets": "3",
              "notes": "Good"
            },
            {
              "id": 4,
              "name": "Bicep Curl",
              "weight": "10 lbs",
              "reps": "15",
              "sets": "3",
              "notes": "3 sets each arm"
            }
      ]
  },
  {
    id: 3,
    title: 'Second Leg Workout',
    date: '2021-03-13',
    workouts: [
        {
            "id": 0,
            "name": "Leg Press",
            "weight": "100 lbs",
            "reps": "10",
            "sets": "3",
            "notes": "Good weight"
          },
          {
            "id": 1,
            "name": "Leg Curl",
            "weight": "45 lbs",
            "reps": "10",
            "sets": "3",
            "notes": "Good weight"
          },
          {
            "id": 2,
            "name": "Kettlebell Squats",
            "weight": "12 lbs",
            "reps": "12",
            "sets": "3",
            "notes": "Good"
          },
          {
            "id": 3,
            "name": "Deadlift",
            "weight": "40 lbs",
            "reps": "10",
            "sets": "3",
            "notes": "Good weight"
          },
          {
            "id": 4,
            "name": "Kickbacks",
            "weight": "25 lbs",
            "reps": "15",
            "sets": "3",
            "notes": "3 sets each leg"
          },
          {
            "id": 5,
            "name": "Back extension",
            "weight": "80 lbs",
            "reps": "10",
            "sets": "3",
            "notes": "Great"
          }
    ]
},
];


export function CreateRoutine() {
    if(!this.title) {
      this.title = this.date
    }     
    routines.push({
      id: this.wId++,
      title: this.title,
      date: this.date,
      workouts: this.workouts,
    })
      this.title=null;
      this.date=null;
      this.workouts= []
  }
export function GetRoutines() {
    return routines;
}
// export function GetWorkouts() {
//   return routines.workouts;
//   // return routines.workouts(x => x.routines.id == id); 
// }