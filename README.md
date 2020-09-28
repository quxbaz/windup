# windup

## IMPORTANT
- Logic is completely separated from rendering.


## BASICS

windup.createApp() -> app state { app }
windup.destroyApp(<id>)


## NAVIGATION

windup.switchFocus(<id>)
windup.cycleNext()
windup.cyclePrev()


## GENERAL USAGE

const admin = new windup.Admin()

const handleClick = () => {
  /*
    Create a new app on clicking some button.
  */
  admin.createApp()
}

class WindowManager extends React.Component {
  /*
    Renderer
  */
  render () {
    return (
      <div>
        {admin.apps.map((app) => (
          <App store={app.store} />
        ))}
      </div>
    )

  }
}


## RECURSIVE USAGE
