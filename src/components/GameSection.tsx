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
          <div>
            {smallImage ? (
              <div>
                <img
                  src={smallImage}
                  alt=""
                />
              </div>
            ) : (
              <img
                src={largeImage}
                alt=""
              />
            )}
          </div>
        ) : (
          <>
            {smallImage && (
              <div>
                <img
                  src={smallImage}
                  alt=""
                />
              </div>
            )}
          </>
        )}
        <div>
          {name && <p className="discord-card-activity-title">{name}</p>}
          {details && (
            <p>
              {details.length <= 20
                ? details
                : `${details.substring(0, 20)}...`}
            </p>
          )}
          {state && (
            <>
              {party ? (
                <div>
                  <p>
                    {state.length <= 20
                      ? `${state} (${party.currentSize}/${party.maxSize})`
                      : `${state.substring(0, 20)}... (${party.currentSize}/${party.maxSize})`}
                  </p>
                </div>
              ) : (
                <p>
                  {state.length <= 20 ? state : `${state.substring(0, 20)}...`}
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
