npx nx affected --targets=install:ci,build --base="$(env.GIT_PREVIOUS_SUCCESSFUL_COMMIT)" --head=HEAD
