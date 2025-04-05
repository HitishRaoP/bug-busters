import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, required: true },
  date: { type: Date, required: true }
}, { _id: false });

const CoinHistorySchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  reason: { type: String, required: true }, // e.g., 'completed_task', 'missed_task'
  date: { type: Date, required: true }
}, { _id: false });

const CompletedChallengeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  outcome: { type: String, required: true }
}, { _id: false });

// New schema for Audio Library content
const AudioContentSchema = new mongoose.Schema({
  content_id: { type: mongoose.Schema.Types.ObjectId, ref: "AudioContent", required: true },
  last_accessed: { type: Date, required: true },
  favorite: { type: Boolean, default: false },
  progress: { type: Number, default: 0 } // Track progress percentage
}, { _id: false });

// New schema for badges and achievements
const BadgeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  earned_date: { type: Date, required: true },
  category: { type: String, required: true }, // physical, mental, emotional, spiritual
  icon: { type: String, required: false }
}, { _id: false });

// New schema for 41-Day Challenge
const ChallengeSchema = new mongoose.Schema({
  goal: { type: String, required: true },
  progress: { type: Number, default: 0 }, // 0-100%
  start_date: { type: Date, required: true },
  current_day: { type: Number, default: 1 },
  completed: { type: Boolean, default: false },
  missed_days: { type: [Date], default: [] },
  difficulty_adjustment: { type: Number, default: 0 } // Tracks difficulty changes based on missed tasks
}, { _id: false });

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  profession: { type: String, required: true },
  interests: { type: [String], required: true },
  goals: { type: [String], required: true },
  
  coins: { type: Number, required: true },
  level: { type: Number, required: true },
  experiencePoints: { type: Number, required: true },
  
  // New personal growth path fields
  growth_category: { type: String, enum: ["student", "professional", "fitness", "spiritual"], required: true },
  personal_journey: { type: String, required: true },

  tasks: { type: [TaskSchema], required: true },
  daily_streak: { type: [Date], required: true },
  coin_history: { type: [CoinHistorySchema], default: [] },

  // Enhanced AI coach profile
  ai_coach_profile: {
    tone: { type: String, required: true }, // motivational, strict, etc.
    frequency: { type: String, required: true }, // daily, weekly
    interaction_history: { type: [{
      query: String,
      response: String,
      date: Date
    }], default: [] }, // Track AI coach interactions
    personalized_insights: { type: [String], default: [] }
  },

  // 41-Day Challenge
  current_challenge: { type: ChallengeSchema },
  past_challenges: { type: [ChallengeSchema], default: [] },

  completed_challenges: {
    type: [CompletedChallengeSchema],
    required: true
  },

  // Gamification elements
  badges: { type: [BadgeSchema], default: [] },
  titles: { type: [String], default: [] }, // Special titles earned by users
  
  // Audio Library
  audio_content_history: { type: [AudioContentSchema], default: [] },
  favorite_content: { type: [mongoose.Schema.Types.ObjectId], default: [], ref: "AudioContent" },

  reminders_enabled: { type: Boolean, required: true },
  notification_preferences: {
    email: { type: Boolean, required: true },
    push: { type: Boolean, required: true }
  },

  privacy_settings: {
    anonymous_mode: { type: Boolean, required: true },
    share_progress: { type: Boolean, required: true },
    show_in_leaderboard: { type: Boolean, required: true }
  },

  // Enhanced accountability partnerships
  partner_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: false },
  accountability_groups: [{ type: mongoose.Schema.Types.ObjectId, ref: "Group" }],
  
  // Track messaging access level
  messaging_access_level: { type: Number, default: 1, min: 1, max: 3 }
});

export default mongoose.model("User", UserSchema);