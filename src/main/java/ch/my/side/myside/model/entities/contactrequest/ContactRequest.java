package ch.my.side.myside.model.entities.contactrequest;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "ContactRequest")
public class ContactRequest {

    @Id
    @SequenceGenerator(name="contact_sequence", sequenceName = "contact_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "contact_sequence")
    private Long id;

    private String name;
    private String email;
    private String comment;
    private LocalDateTime localDateTime;

    public ContactRequest(String name, String email, String comment) {
        this.name = name;
        this.email = email;
        this.comment = comment;
        this.localDateTime = LocalDateTime.now();
    }

    public ContactRequest(Long id, String name, String email, String comment) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.comment = comment;
        this.localDateTime = LocalDateTime.now();
    }

    public ContactRequest() {
        this.localDateTime = LocalDateTime.now();
    }

    @Override
    public String toString() {
        return "ContactRequest{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", comment='" + comment + '\'' +
                ", localDateTime=" + localDateTime +
                '}';
    }
}

