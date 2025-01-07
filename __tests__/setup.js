// Mock prompts in test mode
jest.mock('prompts', () => {
    return () => Promise.resolve({
        projectName: process.env.PROJECT_NAME,
        uiFramework: process.env.UI_FRAMEWORK
    });
}); 