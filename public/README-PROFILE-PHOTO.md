# Profile Photo Setup

## How to Add Your Profile Photo

1. **Prepare your photo:**
   - Choose a professional headshot or portrait photo
   - Recommended: Square aspect ratio (1:1)
   - Recommended size: At least 300x300 pixels
   - Supported formats: JPG, PNG, or WebP

2. **Name your photo:**
   - Rename your photo to `profile.jpg` (or `profile.png`)

3. **Place your photo:**
   - Copy your photo to this `public` folder
   - The final path should be: `public/profile.jpg`

4. **The photo will automatically appear:**
   - Once you add `profile.jpg` to this folder, refresh your browser
   - The photo will appear in a circular frame with your name and title
   - It will have a nice hover effect and color-coded border based on light/dark mode

## Temporary Placeholder

If you don't have a photo ready yet, you can:
- Use a placeholder service like `https://ui-avatars.com/api/?name=David+Xu&size=150`
- Or update the ProfileHeader component to show your initials instead

## Update the Component (Optional)

If you want to use a different filename or path, edit:
`app/components/profile-header.tsx` line 9

Change:
```tsx
src="/profile.jpg"
```

To your preferred path.
