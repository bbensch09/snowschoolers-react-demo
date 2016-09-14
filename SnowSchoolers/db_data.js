export default {
  "beta_users": [],
  "users": [
    {
      "id": 1,
      "name": "Ana Smith",
      "verified_instructor": false,
      "created_at": "2011-09-10 14:44:24 UTC",
      "updated_at": "2016-08-03 14:44:24 UTC",
      "email": "anasmith@mail.com",
      "encrypted_password": "$2a$10$QMdlaNQVIVzI/ZCAmgb8QeUSjtuc4AWMIUwk2fXCtps9/k6KMttAO"
    },
    {
      "id": 2,
      "name": "Josh Yamada",
      "verified_instructor": true,
      "created_at": "2011-09-10 14:44:24 UTC",
      "updated_at": "2016-08-03 14:44:24 UTC",
      "encrypted_password": "$2a$10$QMdlaNQVIVzI/ZCAmgb8QeUSjtuc4AWMIUwk2fXCtps9/k6KMttAO"
    },
    {
      "id": 3,
      "name": "Daniel Goeth",
      "verified_instructor": false,
      "created_at": "2011-09-10 14:44:24 UTC",
      "updated_at": "2016-08-03 14:44:24 UTC",
      "encrypted_password": "$2a$10$QMdlaNQVIVzI/ZCAmgb8QeUSjtuc4AWMIUwk2fXCtps9/k6KMttAO"
    },
    {
      "id": 4,
      "name": "Allen Smith",
      "verified_instructor": true,
      "created_at": "2011-09-10 14:44:24 UTC",
      "updated_at": "2016-08-03 14:44:24 UTC",
      "encrypted_password": "$2a$10$QMdlaNQVIVzI/ZCAmgb8QeUSjtuc4AWMIUwk2fXCtps9/k6KMttAO"
    },
    {
      "id": 5,
      "name": "Ana Howard",
      "verified_instructor": true,
      "created_at": "2011-09-10 14:44:24 UTC",
      "updated_at": "2016-08-03 14:44:24 UTC",
      "encrypted_password": "$2a$10$QMdlaNQVIVzI/ZCAmgb8QeUSjtuc4AWMIUwk2fXCtps9/k6KMttAO"
    }
  ],
  "lessons": [
    {
      "id": 1,
      "activity": "Ski",
      "location": "Mt. Hotham",
      "lesson_time_id": 1,
      "start_time": "09:00:00",
      "ability_level": "Beginner",
      "objectives": "Learn the fundamentals of the sport",
      "terms_accepted": true,
      "instructor_id": 1,
      "requester_id": 1
    },
    {
      "id": 2,
      "activity": "Snowboard",
      "location": "Falls Creek",
      "lesson_time_id": 2,
      "start_time": "13:00:00",
      "ability_level": "Intermediate",
      "objectives": "Work on my basic skills and get ready for more advanced stuff",
      "terms_accepted": true,
      "instructor_id": 2,
      "requester_id": 1
    },
    {
      "activity": "",
      "location": "",
      "lesson_time_id": 1,
      "instructor_id": 1,
      "id": 3
    },
    {
      "activity": "",
      "location": "",
      "lesson_time_id": 1,
      "instructor_id": 1,
      "id": 4
    }
  ],
  "lesson_times": [
    {
      "id": 1,
      "date": "2016-08-18",
      "slot": "Morning"
    },
    {
      "id": 2,
      "date": "2016-08-18",
      "slot": "Afternoon"
    },
    {
      "id": 3,
      "date": "2016-08-18",
      "slot": "Full Day"
    },
    {
      "id": 4,
      "date": "2016-08-19",
      "slot": "Full Day"
    },
    {
      "id": 5,
      "date": "2016-08-20",
      "slot": "Full Day"
    }
  ],
  "students": [
    {
      "id": 1,
      "name": "Ashley Morgan",
      "age_range": "under 10",
      "gender": "Female",
      "lesson_history": "something",
      "experience": "none",
      "relationship_to_requester": "n/a"
    }
  ],
  "instructors": [
    {
      "id": 1,
      "first_name": "Allen",
      "last_name": "Smith",
      "username": "allensmith",
      "certification": "something",
      "phone_number": "123-456-7890",
      "preferred_resorts": "None",
      "sport": "Ski",
      "bio": "I love to ski!",
      "intro": "Hey guys!",
      "status": "Active",
      "user_id": 4,
      "created_at": "2011-09-10 14:44:24 UTC",
      "updated_at": "2016-08-03 14:44:24 UTC"
    },
    {
      "id": 2,
      "first_name": "Ana",
      "last_name": "Howard",
      "username": "anahoward",
      "certification": "something",
      "phone_number": "173-454-7890",
      "preferred_resorts": "None",
      "sport": "Ski",
      "bio": "I love to ski!!! Yes.",
      "intro": "Hey !",
      "status": "Active",
      "user_id": 5,
      "created_at": "2011-09-10 14:44:24 UTC",
      "updated_at": "2016-08-03 14:44:24 UTC"
    }
  ]
};
