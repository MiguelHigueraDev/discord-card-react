import { Party } from "../interfaces/Party";

const GameSection = ({
  title,
  name,
  state,
  details,
  largeImage,
  smallImage,
  party,
}: {
  title?: string;
  applicationId?: string;
  name?: string;
  state?: string;
  details?: string;
  largeImage?: string;
  smallImage?: string;
  party?: Party;
}) => {
  return (
    <section className="discord-card-section">
      <div className="discord-card-activity-header">
        {title ? <h3>{title}</h3> : <h3>Playing a game</h3>}
      </div>
      <div className="discord-card-activity-body">
        {largeImage ? (
          <div className="discord-card-activity-flex-container">
            <div className="discord-card-activity-relative-container">
              <img src={largeImage} alt="" />
              {smallImage && <img src={smallImage} alt="" className="discord-card-activity-absolute-img" />}
            </div>
          </div>
        ) : (
          <>
            {smallImage && (
              <div>
                <img src={smallImage} alt="" />
              </div>
            )}
          </>
        )}
        <div>
          {name && <p className="discord-card-activity-title">{name}</p>}
          {details && (
            <p>
              {details.length <= 30
                ? details
                : `${details.substring(0, 30)}...`}
            </p>
          )}
          {state && (
            <>
              {party ? (
                <div>
                  <p>
                    {state.length <= 30
                      ? `${state} (${party.currentSize}/${party.maxSize})`
                      : `${state.substring(0, 30)}... (${party.currentSize}/${
                          party.maxSize
                        })`}
                  </p>
                </div>
              ) : (
                <p>
                  {state.length <= 30 ? state : `${state.substring(0, 30)}...`}
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default GameSection;
