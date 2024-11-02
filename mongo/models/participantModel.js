import { Schema, model, models } from "mongoose";

const ParticipantSchema = new Schema({
 name: {type: String, required: true},
 school: {type: String, required: true},
 round1: {
    roundNumber: {type: Number, required: true, default: 1},
    score: {type: Number, required: true, default: 0}
 },
round2: {
        roundNumber: {type: Number, required: true, default: 2},
        score: {type: Number, required: true, default: 0}
},
round3: {
        roundNumber: {type: Number, required: true, default: 3},
        score: {type: Number, required: true, default: 0}
},
round4: {
        roundNumber: {type: Number, required: true, default: 4},
        score: {type: Number, required: true, default: 0}
},
round5: {
        roundNumber: {type: Number, required: true, default: 5},
        score: {type: Number, required: true, default: 0}
},
total: {type: Number, required: true, default: 0},
});

const Participant = models.Participant || model("Participant", ParticipantSchema);

export default Participant;

