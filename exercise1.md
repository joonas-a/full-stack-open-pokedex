Application is an open-source web app built with Python and Django, and no external frontend library

> _Some common steps in a CI setup include linting, testing, and building. What are the specific tools for taking care of these steps in the ecosystem of the language you picked? You can search for the answers by google._

- For linting we will be using pylint. Unit tests will be conducted with the `unittest` module from the standard python library. E2E-tests are done with pytest & playwright. Building is handled by django, which will create WSGI and ASGI interfaces, both of which can be used for deployment.

> _What alternatives are there to set up the CI besides Jenkins and GitHub Actions? Again, you can ask google!_

- GitLab has it's own alternative to GitHub actions (GitLab CI), other choices could be Azure DevOps, CircleCI, TravisCI, ... there are many.

> _Would this setup be better in a self-hosted or a cloud-based environment? Why? What information would you need to make that decision?_

- As the team is a firm believer in open-source everything, GitHub actions works the best for them, as there are no fees or computing costs, and the setup is quite straightforward, meaning the developers get more time to spent on features that actually matter. Even if the app grew larger, cloud based providers would still be the better choice as they're easily scalable.
