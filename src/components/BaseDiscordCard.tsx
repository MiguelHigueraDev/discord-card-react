import styles from "../styles/BaseDiscordCard.module.css";
import BadgeSection from "./BadgeSection";
import { Badge } from "../interfaces/Badge";
import { ConnectionStatus } from "../interfaces/ConnectionStatus";

const BaseDiscordCard = ({
  imageUrl,
  bannerUrl,
  primaryColor,
  accentColor,
  badges,
  connectionStatus = "online",
  children,
}: {
  imageUrl: string;
  bannerUrl: string;
  primaryColor: string;
  accentColor: string;
  badges?: Badge[];
  connectionStatus?: ConnectionStatus;
  children: React.JSX.Element | React.JSX.Element[];
}) => {
  return (
    <div className={styles["discord-card-container"]}>
      <div
        className={styles["discord-card-border"]}
        style={{
          background: `linear-gradient(to bottom, ${primaryColor}, ${accentColor})`,
        }}
      >
        <div className={styles["discord-banner-container"]}>
          <div className={styles["discord-profile-picture-border"]}>
            <img
              src={imageUrl}
              alt="Discord profile picture"
              className={styles["discord-profile-picture"]}
              style={{
                background: `linear-gradient(to bottom, ${primaryColor} 60%, transparent 40%)`,
              }}
            />
          </div>
          <img
            src={bannerUrl}
            className={styles["discord-banner-image"]}
            alt=""
          />
          <div className={styles["discord-card-status-container"]}>
            <img
              src={`${
                connectionStatus === "offline"
                  ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAClUExURQAAAHR/jnR/jnR/jnR/jnR/jnR/jnR/jnR/jnR/jnR/jnR/jnR/jnR/jnR/jnR/jnR/jnR/jnR/jnR/jnR/jnR/jnR/jnR/jnR/jnR/jnR/jnR/jnR/jnR/jnR/jnR/jnWAj254hmVve2BodWZvfE1TXDs+RTM1OzAzOGZwfXR/j3F8i1RbZTY4Pi4wNS8xNjAyN1RbZjY5PzM2O2BpdTEzOP///5shBGgAAAAfdFJOUwAAIGKn1/L9HyOC1voHY9nYEZL5+KIGIoHVYaal8fw1lhpWAAAAAWJLR0Q2R7+I0QAAAAd0SU1FB+gDEAAUItq0iLEAAAEFSURBVCjPhZNrd4IwDIaLVbl5A3Wb21xFKYhAQaf//68tieVM+WDeL03y5OSkbSIEygEN5HA0dt3xaCg99EUndPwgnCirSRj4/wlgTGdz9aSFnFoORxQvVU+rOLpzoOsuuAN19jpCDJVjy1SyPxz2ibIZ8Rtwx5Gru5vqLD8e80wXtr5E7C/QPpVVbUwDMqauyhP19w44oNRStwQpodUlBT8c4W3IqtrmQe2ZghtPSLzTrqjNIzaXAvtbfoovytNPFLim8LcI8UiyPs4SjIdii7XTvOnpN8XqW+Eivt76+HZF/MNhpjjTGnMx5lmYR2W+hPtQZhxeDxMzitwgM2vALdGrFfwD3RBlxXL9e7YAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjQtMDMtMTZUMDA6MjA6MjQrMDA6MDDJWktTAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDI0LTAzLTE2VDAwOjIwOjI0KzAwOjAwuAfz7wAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyNC0wMy0xNlQwMDoyMDozNCswMDowMCO40q4AAAAASUVORK5CYII="
                  : connectionStatus === "idle"
                  ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAADPUExURQAAAPqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGvqmGv///5vYaPcAAABDdFJOUwAABlzO/vLXp2IfAyqa+PrVgiNy9NgHAn79khEPuqJQkROeIoCBeYv5YbOlWyjk1ivxmzXj/CHBNLlPpvd/eIpj2SBnFTDgAAAAAWJLR0RE+bSYwQAAAAd0SU1FB+gDEAAUItq0iLEAAAEjSURBVCjPddNpe4IwDADghiFY3CqgIIdzU3c4nbrD3ffy//+TKXJT8qUPfaENacpYHqAd6dgxzC63gILVAqB3fCIQsW87bvMFOaMNhijD435zAZoZBWHiIoqVG4xP8RCTuMnkZyL1c031+VRPWXDl57OU0Zur+CJjvFTxVc62xerpA1znvLhh9fRAW+aMK3bbqzjAelPwlul3ZaatgkLxnuFDaXnSx12Jn1hHDEZZejQ+v2CFDRwGY8jitaK0uIkYvr1Pk9NcB7uKUmofcvjUZ1/fP8sN1mLF+AJbg8pi2e0si+q0Mx0JuF6bygMF4EKtSTsA+JGaD80EEE9UmrYi1SOOGn9XNDIN/u9fLavSNZAFdZ1tP7PGJZIP/7xrGmFYvYJ7Rhp0DlJ+GwsAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjQtMDMtMTZUMDA6MjA6MjQrMDA6MDDJWktTAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDI0LTAzLTE2VDAwOjIwOjI0KzAwOjAwuAfz7wAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyNC0wMy0xNlQwMDoyMDozMyswMDowMOYf7CAAAAAASUVORK5CYII="
                  : connectionStatus === "dnd"
                  ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAACoUExURQAAAPBHR/BHR/BHR/BHR/BHR/BHR/BHR/BHR/BHR/BHR/BHR/BHR/BHR/BHR/BHR/BHR/BHR/BHR/BHR/BHR/BHR/BHR/BHR/BHR/BHR/BHR/BHR/BHR/BHR/BHR/BHR/BHR/BHR/JHR/JHR/NHR/RHR/BHR/JHR/FHR+5HR8pDRII6PW44PNJERE41OSsxNiwxNk81OdNERJw9QC0xNi8xNp0+QP///64uacQAAAAmdFJOUwAAIGKn1/L9HyOC1vr51Qdj2dgGEZP4kqOhkWEigdQeYKXy8P38brNUXgAAAAFiS0dENzC4uEcAAAAHdElNRQfoAxAAFCFDvdkLAAAAxElEQVQoz4WT6Q6CMAyAizCQU1DA+9aCoOKBvv+juUWM0Wz0+7M139JsXQsg0Dgd3WCmZZnM0Lsihg8isB3XwwY/cOzvAb7phRH+0NcHjedLnPj4RzqM357bEUoYx0LzzAlKmfD8XIe+XKdToe0IFbAZ1w4qmWvQcdV6sQTdU2t/BQZm+UFKnuEaWF6URyllkQewOZ2ri5TqetvC7l4/FNTPPaWJ5MTViIcRZSGKSnwJ9aFEO7Q3E9GKVCMTY0ANUdsIvgC0fm1phA7QmwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNC0wMy0xNlQwMDoyMDoyMyswMDowMAz9dd0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjQtMDMtMTZUMDA6MjA6MjMrMDA6MDB9oM1hAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI0LTAzLTE2VDAwOjIwOjMzKzAwOjAw5h/sIAAAAABJRU5ErkJggg=="
                  : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAA/UExURQAAAEO1gUO1gUO1gUO1gUO1gUO1gUO1gUO1gUO1gUO1gUO1gUO1gUO1gUO1gUO1gUO1gUO1gUO1gUO1gf///3Uepd8AAAATdFJOUwAAIGKn1/L9I4LW+gdj2RGT+aNu7qdNAAAAAWJLR0QUkt/JNQAAAAd0SU1FB+gDEAAUI62zuCcAAACdSURBVCjPhZNZDsMgDAUd9iVs8f3vWqOmqloF3vyANcgCYxNNDkFpY533zhqtZkwfZhBiynyTUwzfA7I5S+UfajlvL0vrg/8Yvb292IsfuNrUkrnzI13yiy7jWY8ydai8oAbRkZfEg1Ra66RI57XOmgxvMGR32pLbaUd+pz3SIDm4GngYKAsoKvgS9KGgHfbNBFoRNTIYAzREuxF8Af/sNElcLcDyAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI0LTAzLTE2VDAwOjIwOjI1KzAwOjAwby1A5wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNC0wMy0xNlQwMDoyMDoyNSswMDowMB5w+FsAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjQtMDMtMTZUMDA6MjA6MzQrMDA6MDAjuNKuAAAAAElFTkSuQmCC"
              }`}
              className={styles["discord-card-status-icon"]}
              alt=""
              aria-label={`This user's status is ${connectionStatus}`}
            />
          </div>
          {badges && <BadgeSection badges={badges} />}
        </div>
        <div className={styles["discord-card-outer-body"]}>
          <div className={styles["discord-card-inner-body"]}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default BaseDiscordCard;
