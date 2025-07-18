import mongoose from 'mongoose';

const TournamentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  game: { type: String, required: true },
  type: { type: String, required: true }, // solo, duo, squad, etc.
  mode: { type: String, required: true }, // TPP/FPP, classic, etc.
  date: { type: Date, required: true },
  time: { type: String, required: true },
  entryFee: { type: String, required: true },
  prize: { type: String, required: true },
  status: { type: String, default: 'upcoming' }, // upcoming, ongoing, completed
  teams: [{ type: String }], // list of registered teams
  maxTeams: { type: Number, required: true }
}, { timestamps: true });

const Tournament = mongoose.model('Tournament', TournamentSchema);

export default Tournament;
