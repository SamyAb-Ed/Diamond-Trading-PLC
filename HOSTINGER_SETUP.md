# Hostinger Domain & SSL Setup Guide

## Part 1: Ensure diamondtradingplc.com Points to Your Hosting Account

### Step 1: Check Current Domain Configuration

1. **Login to Hostinger**

   - Go to https://hpanel.hostinger.com/
   - Login with your credentials

2. **Navigate to Domains**

   - Click on "Domains" in the left sidebar
   - Find `diamondtradingplc.com` in the list

3. **Verify Domain Assignment**
   - Click on `diamondtradingplc.com`
   - Check if it shows "Connected" or "Assigned" to your hosting account
   - If not connected, you'll need to connect it

### Step 2: Connect Domain to Hosting (If Not Already Connected)

1. **If domain is registered with Hostinger:**

   - In the Domains section, find `diamondtradingplc.com`
   - Click on it, then click "Manage"
   - Look for "Assign to Website" or "Connect to Hosting"
   - Select your hosting account
   - Click "Save" or "Assign"

2. **If domain is registered elsewhere:**
   - You need to update DNS nameservers
   - Get your Hostinger nameservers from the hosting panel:
     - Usually something like: `ns1.dns-parking.com` and `ns2.dns-parking.com`
     - Or `ns1.hostinger.com` and `ns2.hostinger.com`
   - Go to your domain registrar (where you bought the domain)
   - Update the nameservers to point to Hostinger's nameservers
   - Wait 24-48 hours for DNS propagation

### Step 3: Verify DNS Settings

1. **Check A Record**

   - Go to "DNS Zone Editor" or "DNS Management" in Hostinger
   - Ensure there's an A record pointing `@` (or root domain) to your server IP
   - The record should look like:
     ```
     Type: A
     Name: @
     Value: [Your server IP address]
     TTL: 3600
     ```

2. **Check Nameservers (If domain registered elsewhere)**
   - You can verify nameservers are correct using: https://www.whatsmydns.net/
   - Search for `diamondtradingplc.com` and check if nameservers match Hostinger's

## Part 2: Enable SSL/HTTPS for diamondtradingplc.com

### Step 1: Access SSL Settings

1. **Login to Hostinger hPanel**

   - Go to https://hpanel.hostinger.com/

2. **Navigate to SSL**
   - Click on "SSL" in the left sidebar
   - Or go to "Websites" → Select your site → "SSL"

### Step 2: Enable Free SSL (Let's Encrypt)

Hostinger provides free SSL certificates via Let's Encrypt:

1. **Find Your Domain**

   - In the SSL section, you should see `diamondtradingplc.com` listed

2. **Install SSL Certificate**

   - Click on "Install SSL" or "Activate SSL" button next to your domain
   - If you see "Auto SSL" or "Free SSL", click "Enable" or "Install"
   - Wait for the installation to complete (usually 5-15 minutes)

3. **Enable Auto-Renewal (Recommended)**
   - Make sure "Auto-Renew" is enabled
   - This ensures your SSL certificate stays valid automatically

### Step 3: Force HTTPS (Redirect HTTP to HTTPS)

1. **Enable HTTPS Redirect**

   - In SSL settings, look for "Force HTTPS" or "HTTPS Redirect"
   - Enable this option to automatically redirect all HTTP traffic to HTTPS
   - Click "Save" or "Enable"

2. **Alternative: Add to .htaccess**
   - If the option isn't available, you can add this to your `.htaccess` file:
   ```apache
   RewriteEngine On
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```
   - I've already included this in the `.htaccess` file I created for you!

### Step 4: Verify SSL is Working

1. **Test HTTPS Access**

   - Visit https://diamondtradingplc.com in your browser
   - You should see a padlock icon (🔒) in the address bar
   - The URL should show `https://` (not `http://`)

2. **Check SSL Status**
   - Use online tools to verify:
     - https://www.ssllabs.com/ssltest/analyze.html?d=diamondtradingplc.com
     - https://www.sslshopper.com/ssl-checker.html

## Troubleshooting

### Domain Not Pointing Correctly

**Issue:** Website not loading or showing wrong content

**Solutions:**

- Check DNS propagation: https://www.whatsmydns.net/
- Verify nameservers are correct
- Ensure A record points to correct IP
- Wait 24-48 hours for DNS changes to propagate globally
- Clear your browser cache and DNS cache:
  - Windows: Open Command Prompt as Admin, run `ipconfig /flushdns`
  - Mac/Linux: Run `sudo dscacheutil -flushcache`

### SSL Certificate Not Installing

**Issue:** SSL installation fails or shows error

**Solutions:**

- Ensure domain is properly pointing to Hostinger first
- Wait a few hours after connecting domain before enabling SSL
- Check if your domain has valid DNS records
- Contact Hostinger support if issues persist

### Mixed Content Warnings

**Issue:** Site loads but shows "Not Secure" or mixed content warnings

**Solutions:**

- Ensure all images and resources use HTTPS URLs
- Check browser console for mixed content errors
- Update any hardcoded `http://` URLs to `https://`
- The `.htaccess` file I created should help with this

### SSL Certificate Expired

**Issue:** SSL shows as expired or invalid

**Solutions:**

- Check SSL status in Hostinger panel
- Enable auto-renewal
- Manually renew if needed
- Contact Hostinger support if renewal fails

## Quick Checklist

- [ ] Domain `diamondtradingplc.com` is registered
- [ ] Domain nameservers point to Hostinger (if registered elsewhere)
- [ ] Domain is assigned/connected to hosting account
- [ ] DNS A record points to correct server IP
- [ ] SSL certificate is installed for the domain
- [ ] HTTPS redirect is enabled
- [ ] Website is accessible via https://diamondtradingplc.com
- [ ] Padlock icon shows in browser address bar
- [ ] Auto-renewal is enabled for SSL

## Need More Help?

If you encounter issues:

1. **Hostinger Support**: Contact them via live chat or ticket system
2. **Hostinger Knowledge Base**: Search for "SSL" or "Domain Setup" articles
3. **Check Documentation**: Hostinger usually has step-by-step guides in their help center

## Important Notes

- **DNS Propagation**: Can take 24-48 hours to fully propagate globally
- **SSL Installation**: Usually takes 5-15 minutes but can take up to 24 hours
- **Free SSL**: Hostinger provides free SSL via Let's Encrypt (renews automatically)
- **HTTPS Redirect**: Important for SEO and security - always redirect HTTP to HTTPS
