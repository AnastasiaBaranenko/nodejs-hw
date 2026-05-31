import { Schema } from 'mongoose';
import { model } from 'mongoose';

const noteSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
    },

    content: {
      type: String,
      trim: true,
      default: '',
    },

    tag: {
      enum: [
        'Work',
        'Personal',
        'Meeting',
        'Shopping',
        'Ideas',
        'Travel',
        'Finance',
        'Health',
        'Important',
        'Todo',
      ],
      default: ['Todo'],
    },
  },
  {
    timestamps: true,
  },
);

export const Note = model('Note', noteSchema);
