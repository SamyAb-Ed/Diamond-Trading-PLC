# Hostinger Deployment Guide for Diamond Trading PLC

## Prerequisites

1. Build files are ready in the `dist` folder
2. Access to your Hostinger hosting account
3. File Manager or FTP client (FileZilla, WinSCP, etc.)

## Deployment Steps

### Option 1: Using Hostinger File Manager (Easiest)

1. **Login to Hostinger**

   - Go to https://hpanel.hostinger.com/
   - Login with your credentials

2. **Access File Manager**

   - Navigate to your hosting account
   - Click on "File Manager" in the control panel
   - Go to the `public_html` folder (this is your website root)

3. **Clear existing files (if any)**

   - Select all files in `public_html` (if this is a new site, you can skip this)
   - Delete them (or backup first if needed)

4. **Upload files**

   - Upload ALL contents from the `dist` folder to `public_html`
   - Important: Upload the files INSIDE `dist`, not the `dist` folder itself
   - This includes:
     - `index.html`
     - `.htaccess` file
     - `assets/` folder
     - All image files (logo.png, vision.jpg, etc.)

5. **Set correct permissions**

   - Right-click on `.htaccess` → Change Permissions → Set to 644
   - All other files should have 644 permissions
   - Folders should have 755 permissions

6. **Test your website**
   - Visit https://diamondtradingplc.com/
   - Check if the site loads correctly
   - Test navigation between sections

### Option 2: Using FTP Client (FileZilla/WinSCP)

1. **Get FTP credentials from Hostinger**

   - Go to Hostinger hPanel
   - Navigate to "FTP Accounts"
   - Note your FTP host, username, and password

2. **Connect via FTP**

   - Open FileZilla or your FTP client
   - Enter FTP host, username, and password
   - Connect to your server

3. **Navigate to public_html**

   - In the remote site area, go to `/public_html`

4. **Upload files**

   - In local site area, navigate to your project's `dist` folder
   - Select ALL files and folders inside `dist`
   - Drag and drop them to `/public_html` on the server
   - Wait for upload to complete

5. **Verify permissions**
   - `.htaccess` should be 644
   - Other files should be 644
   - Folders should be 755

## Important Notes

- **Domain Configuration**: Ensure your domain `diamondtradingplc.com` is properly configured in Hostinger to point to the correct hosting account
- **SSL Certificate**: Make sure SSL/HTTPS is enabled for your domain in Hostinger
- **File Paths**: All paths in the build are relative, so they should work correctly on Hostinger
- **Images**: All images from the `public` folder are copied to `dist` during build, so they're included

## Troubleshooting

### If pages show 404 errors:

- Check that `.htaccess` file is uploaded correctly
- Verify mod_rewrite is enabled on your Hostinger server
- Check file permissions (644 for files, 755 for folders)

### If images don't load:

- Verify all image files are uploaded to `public_html`
- Check file paths are correct (case-sensitive on Linux servers)
- Clear browser cache

### If CSS/JS doesn't load:

- Check that the `assets` folder is uploaded correctly
- Verify file permissions
- Check browser console for specific errors

## Updating Your Site

When you make changes:

1. **Make changes** to your source files in `src/`
2. **Rebuild**: Run `npm run build` locally
3. **Upload new files** from the `dist` folder to Hostinger's `public_html`
4. **Clear browser cache** or do a hard refresh (Ctrl+Shift+R)

## Need Help?

If you encounter any issues:

1. Check Hostinger's knowledge base
2. Contact Hostinger support
3. Check browser console for JavaScript errors
4. Verify all files uploaded correctly
