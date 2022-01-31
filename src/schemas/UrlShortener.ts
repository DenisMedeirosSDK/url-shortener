import mongoose, { Schema } from 'mongoose';

export interface UrlShortener {
  originalUrl: string;
  encoded: string;
  createdAt: Date;
}

const UrlShortenerSchema = new Schema<UrlShortener>({
  originalUrl: String,
  encoded: {
    type: String,
    unique: true,
  },
  createdAt: Date,
});

export const UrlShortener = mongoose.model<UrlShortener>(
  'urlShorteners',
  UrlShortenerSchema
);
