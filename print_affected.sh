PREVIOUS_SUCCESSFUL_COMMIT=$env.GIT_PREVIOUS_SUCCESSFUL_COMMIT;

npx nx print-affected --targets=install:ci,build --base="$PREVIOUS_SUCCESSFUL_COMMIT" --head=HEAD --select=projects
