# Explain File and Update Documentation

Analyze the currently open or specified file and:

1. **Explain the file's purpose and functionality**:
   - What the file does
   - Key features and responsibilities
   - How it fits into the project structure
   - Important patterns or conventions used

2. **Update/add concise documentation**:
   - Add or update file header comments (for code files)
   - Use JSDoc-style comments for functions/classes if appropriate
   - Keep documentation concise and focused on purpose
   - Follow existing documentation style in the codebase
   - Preserve existing user comments unless explicitly updating them

3. **For Vue components**:
   - Update the component header comment block
   - Document features, props, emits, and usage
   - Note any integrations (stores, i18n, routing, etc.)

4. **For TypeScript files**:
   - Add file-level documentation explaining purpose
   - Document exported types and their usage
   - Explain type relationships if complex

5. **For configuration files**:
   - Explain what the configuration does
   - Document key settings and their purposes

**Guidelines**:

- Keep documentation concise (2-5 lines for file headers if this is enough, otherwise more)
- Focus on "what" and "why", not "how" (code shows how)
- Match the existing documentation style in the project
- Don't remove or significantly alter existing comments unless the code has changed accordingly or the documentation change is is asked for by the user
- Use clear, professional language
